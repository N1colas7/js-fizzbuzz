
const container = document.querySelector('.container');

for( let i = 1; i <= 100; i++){
    let element;
    if( i%3 == 0 & i%5 == 0 ) {
         element = '<div class="box box red"></div>';
    }else if ( i%3 == 0 ){
         element = '<div class="box box orange"></div>';
    }else if( i%5 == 0 ){
         element = '<div class="box box green"></div>';
    }else{
         element = '<div class="box box blue"></div>';

    }
}

    container.innerHTML += element ;