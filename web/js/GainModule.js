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
                    document.getElementById('gainCont').style.paddingBottom = '1px';
                    document.getElementById('collapseExample').style.height = '100%';
                    document.getElementById('collapseExample').style.opacity = '1';
                    document.getElementById('collapseExample').style.transform = 'translateY(0)';
                    document.getElementById('allGainTxt').style.opacity = '1';
                    document.getElementById('allGainTxt').style.transform = 'translateY(0)';
                    setTimeout(() => {
                        document.getElementById('gainCont').style.paddingBottom = '0px';
                        document.getElementById('collapseExample').style.opacity = '0';
                        document.getElementById('collapseExample').style.transition = 'ease all 0.15s';
                        document.getElementById('collapseExample').style.transform = 'translateY(-140%)';
                        document.getElementById('collapseExample').style.height = '0';
                        document.getElementById('allGainTxt').style.opacity = '0';
                        document.getElementById('allGainTxt').style.transition = 'ease all 0.15s';
                        document.getElementById('allGainTxt').style.transform = 'translateY(-140%)';
                    }, 5000);
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
    showGainForSeptember() {
        let gainForSeptember = fetch('septemberGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForSeptember.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за сентябрь: " + response.septemberGain + "$";
            })
    }
    showGainForOctober() {
        let gainForOctober = fetch('octoberGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForOctober.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за октябрь: " + response.octoberGain + "$";
            })
    }
    showGainForNovember() {
        let gainForNovember = fetch('novemberGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForNovember.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за ноябрь: " + response.novemberGain + "$";
            })
    }
    showGainForDecember() {
        let gainForDecember = fetch('decemberGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForDecember.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за декабрь: " + response.decemberGain + "$";
            })
    }
    showGainForJanuary() {
        let gainForJanuary = fetch('januaryGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForJanuary.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за январь: " + response.januaryGain + "$";
            })
    }
    showGainForFebruary() {
        let gainForFebruary = fetch('februaryGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForFebruary.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за февраль: " + response.februaryGain + "$";
            })
    }
    showGainForMarch() {
        let gainForMarch = fetch('marchGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForMarch.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за март: " + response.marchGain + "$";
            })
    }
    showGainForApril() {
        let gainForApril = fetch('aprilGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForApril.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за апрель: " + response.aprilGain + "$";
            })
    }
    showGainForMay() {
        let gainForMay = fetch('mayGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForMay.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за май: " + response.mayGain + "$";
            })
    }
    showGainForJune() {
        let gainForJune = fetch('juneGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForJune.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за июнь: " + response.juneGain + "$";
            })
    }
    showGainForJuly() {
        let gainForJuly = fetch('julyGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForJuly.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за июль: " + response.julyGain + "$";
            })
    }
    showGainForAugust() {
        let gainForAugust = fetch('augustGain', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        gainForAugust.then(response => response.json())
            .then(response => {
                document.getElementById('gainForAMonth').innerHTML = "Прибыль за август: " + response.augustGain + "$";
            })
    }
}
const gainModule = new GainModule();
export{gainModule};


// "/septemberGain",
// "/octoberGain",
// "/novemberGain",
// "/decemberGain",
// "/januaryGain",
// "/februaryGain",
// "/marchGain",
// "/aprilGain",
// "/mayGain",
// "/juneGain",
// "/julyGain",
// "/augustGain"