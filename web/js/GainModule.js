class GainModule {
    showAllGain() {
        let allGainPromise = fetch('allGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        allGainPromise.then(response => response.json())
            .then(response => {
                if(response.status) {
                    document.getElementById('allGainTxt').innerHTML = response.allGain;
                    document.getElementById('allGainTxt').style.opacity = '1';
                    document.getElementById('allGainTxt').style.transform = 'translateY(0)';
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
    showGainForAMonth() {
        
    }
}
const gainModule = new GainModule();
export{gainModule};