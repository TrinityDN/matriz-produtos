var tdsProdutos = [["img/produto1.webp","Kit Gamer", " Rosa", " R$139.90"], ["img/produto2.webp", "Cadeira Gamer", " Rosa", " R$599.80"], ["img/produto3.jpg", "Fone Games", " Rosa", " R$239.39"], ["img/produto4.webp", "Fone Bluetooth", " Rosa", " R$99.80"], ["img/produto5.jpg", "Mouse Gamer", " Rosa", " R$109.70"], ["img/produto6.jpg", "Mousepad", " Rosa", " 70.99"]];

for(var x = 0; x < tdsProdutos.length; x++){
    var pai = document.body;
    var divs = document.createElement('div');

    var imagens = document.createElement('img');
    imagens.src = tdsProdutos[x][0];

    var inf = document.createElement('img');
    inf.src = tdsProdutos[x][0];
    inf.style.height = '250px';

    var txts = document.createElement('p');

    var informacoes = document.createTextNode(tdsProdutos[x][1] + tdsProdutos[x][2] + tdsProdutos[x][3]);
    var btn = document.createElement('button');
    var txtbtn = document.createTextNode("Comprar");

    divs.appendChild(inf);
    txts.appendChild(informacoes);
    btn.appendChild(txtbtn);


    pai.appendChild(divs);
    divs.appendChild(txts);
    divs.appendChild(btn);
 
}