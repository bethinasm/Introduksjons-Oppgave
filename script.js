//----------------------------- KAIRO -------------------------------------//

selectKairo ();
function selectKairo (){
        document.getElementById('buttonsKairo').innerHTML= /*HTML*/`
            <div>
                <img src="img/Kairo1.jpg"/> 
                <div>
                    <button onclick="Kairo3()"> 
                        ❮ 
                    </button> 
                    KAIRO
                    <button onclick="Kairo2()"> 
                        ❯ 
                    </button>
                </div>
            </div>
        `;
    }

function Kairo1 (){
    document.getElementById('buttonsKairo').innerHTML= /*HTML*/`
        <div>
            <img src="img/Kairo1.jpg"/> 
            <div>
                <button onclick="Kairo3()"> 
                    ❮ 
                </button> 
                KAIRO
                <button onclick="Kairo2()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}


function Kairo2 (){
    document.getElementById('buttonsKairo').innerHTML= /*HTML*/`
        <div>
            <img src="img/Kairo2.jpg"/>
            <div>
                <button onclick="Kairo1()"> 
                    ❮ 
                </button>
                KAIRO
                <button onclick="Kairo3()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}


function Kairo3 (){
    document.getElementById('buttonsKairo').innerHTML= /*HTML*/` 
        <div>
            <img src="img/Kairo3.jpg"/>
            <div>
                <button onclick="Kairo2()"> 
                    ❮ 
                </button>
                KAIRO
                <button onclick="Kairo1()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}
//--------------------------------- OSCAR -----------------------------------------//

selectOscar ();
function selectOscar (){
    document.getElementById('buttonsOscar').innerHTML= /*HTML*/`
        <div>
            <img src="img/Oscar1.JPG"/> 
            <div>
                <button onclick="Oscar3()"> 
                    ❮ 
                </button>
                OSCAR 
                <button onclick="Oscar2()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}

function Oscar1 (){
    document.getElementById('buttonsOscar').innerHTML= /*HTML*/`
        <div>
            <img src="img/Oscar1.JPG"/>
            <div>   
                <button onclick="Oscar3()"> 
                    ❮ 
                </button> 
                OSCAR
                <button onclick="Oscar2()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}

function Oscar2 (){
    document.getElementById('buttonsOscar').innerHTML= /*HTML*/`
        <div>
            <img src="img/Oscar2.JPG"/>
            <div>
                <button onclick="Oscar1()"> 
                    ❮ 
                </button> 
                OSCAR
                <button onclick="Oscar3()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}

function Oscar3 (){
    document.getElementById('buttonsOscar').innerHTML= /*HTML*/`
        <div>
            <img src="img/Oscar3.JPG"/> 
            <div>
                <button onclick="Oscar2()"> 
                    ❮ 
                </button>
                OSCAR
                <button onclick="Oscar1()"> 
                    ❯ 
                </button>
            </div>
        </div>
    `;
}

//------------------------------- COLOR SWITCH ------------------------------//

function colorSwitch(){
    document.getElementById('body').style.background = 'black';     
    document.getElementById('header').style.background = 'black';
    document.getElementById('button').style.background = 'black';
}

