function strurl(string, url){
const target = document.querySelector('#' + string)

target.src = url
}
strurl('image-1','https://pbs.twimg.com/profile_images/903398169374973952/sq26Z9fy.jpg')

strurl('image-2','https://pathsensors.com/wp-content/uploads/potato-04.jpg')

strurl('image-3','https://image.shutterstock.com/image-vector/pie-600w-324165815.jpg')   

function strikeThrough(){
    const list = document.querySelector('li');
    list.style.textDecoration = 'line-through'


}
strikeThrough()

function removelast(){
    const list = document.querySelector('ul');

    list.removeChild(list.lastElementChild)
}
removelast()
removelast()

function addArgList (element) {

const list = document.querySelector('#arguments').appendChild(element);
}