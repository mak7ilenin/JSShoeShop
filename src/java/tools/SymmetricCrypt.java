/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;

/**
 *
 * @author Melnikov
 */
public class SymmetricCrypt  implements Serializable{
    
    private byte[] enc;
    private static SecretKey key;
    private Cipher cipher;
    private final String pathToFileSecret = "webpasswordmanagersecret";

    public SymmetricCrypt() {
        init();
    }
    
    private void init(){
        try {
            if(key == null){
                key = loadFromFile();
                if(key == null){
                    KeyGenerator keygen = KeyGenerator.getInstance("AES");
                    keygen.init(128);
                    key = keygen.generateKey();
                    saveToFile(key);
                }
            }
        } catch (NoSuchAlgorithmException  ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, "ERROR in SimmetricCript", ex);
        }
    }
    public String encrypt(String text){
        try {
            cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            enc = cipher.doFinal(text.getBytes());
            Base64.Encoder encoder = Base64.getEncoder();
            String encryptedText = encoder.encodeToString(enc);
            return encryptedText;
        } catch (IllegalBlockSizeException | BadPaddingException | InvalidKeyException | NoSuchAlgorithmException | NoSuchPaddingException ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, "ERROR in SimmetricCript", ex);
        }
        return null;
    }
    
    public String decrypt(String encryptedText){
        try {
            Base64.Decoder decoder = Base64.getDecoder();
            byte[] encryptedTextByte = decoder.decode(encryptedText);
            cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, key);
            return new String(cipher.doFinal(encryptedTextByte));
        } catch (InvalidKeyException | IllegalBlockSizeException | BadPaddingException  | NoSuchAlgorithmException | NoSuchPaddingException  ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, "ERROR in SimmetricCript", ex);
        }
        return null;
    }

    private SecretKey loadFromFile() {
        try {
            FileInputStream fis = new FileInputStream(pathToFileSecret);
            ObjectInputStream ois = new ObjectInputStream(fis);
            return key = (SecretKey) ois.readObject();
        } catch (IOException | ClassNotFoundException ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } 
        
    }
    private void saveToFile(SecretKey key) {
            FileOutputStream fos = null;
        try {
            fos = new FileOutputStream(pathToFileSecret);
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(key);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, "secter not found", ex);
        } catch (IOException ex) {
            Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, "secret not available", ex);
        } finally {
            try {
                fos.close();
            } catch (IOException ex) {
                Logger.getLogger(SymmetricCrypt.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        
        
    }
}