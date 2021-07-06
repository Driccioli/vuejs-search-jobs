Vue.config.devtools = true;

var app = new Vue({
    el:"#app",
    data:{
        jobs: [
            {
              id: 1,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            }, 
            {
              id: 2,
              company: 'Similique',
              position: 'Programmer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/29/2021',
              logo: 'logo.jpg',
              city: 'Milano',
              contract: 'Part Time'
            }, 
            {
              id: 3,
              company: 'Adipiscing',
              position: 'Supervisor',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/31/2021',
              logo: 'logo.jpg',
              city: 'Torino',
              contract: 'Stage'
            }, 
            {
              id: 4,
              company: 'Deleniti',
              position: 'Janitor',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '6/01/2021',
              logo: 'logo.jpg',
              city: 'Pavia',
              contract: 'Full Time'
            }, 
            {
              id: 5,
              company: 'Veniam',
              position: 'Manager',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '6/07/2021',
              logo: 'logo.jpg',
              city: 'Napoli',
              contract: 'Part Time'
            }, 
        ],
        starred: [1, 2, 3],
        applied: [4, 5],
        displayModal: true,
    },
    methods:{
        addOrRemove(id, array){
            if (!array.includes(id)){
                array.push(id);
            }   else{
                array.splice(array.indexOf(id), 1);
            }
            if(this.applied.includes(id)){
                this.starred.splice(this.starred.indexOf(id),1);
            }
        },
        apply(){
            function modalOnOff(displayModal){
                setTimeout(function(){
                    if(this.displayModal === true){
                        this.displayModal = false;
                    }   else{
                        this.displayModal = true;
                    };
                }, 1000)
            }
            modalOnOff();
            if(this.displayModal === true){
                modalOnOff();
            }
        }
    }
});