<template>
    <div class="principal centered-container menu-desktop">

        <a-row type="flex" justify="center" align="middle">
            <nuxt-link to='/'>
                        <img class="logo"
                            src="https://raw.githubusercontent.com/Leonardu76/images/main/baber/Ilustra%C3%A7%C3%A3o_de_barbearia_vintage___Vetor_Gr%C3%A1tis-removebg-preview.png"
                            alt="">
                    </nuxt-link>
            <div v-for="dados in data.menu" :key="dados.id">
                <nuxt-link :to="dados.url">
                    <a-col class="gutter-row" :span="2">
                        <div :class="'/' + dados.url ==  currentUrl ? 'gutter-box active' : 'gutter-box inactive'" >{{ dados.name }}</div>
                    </a-col>
                </nuxt-link>
            </div>
        </a-row>
    </div>
    <div class="principal menu-mobile">
        <input type="checkbox" id="burger-toggle">
        <label for="burger-toggle" class="burger-menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        <nav class="menu">

            <div class="menu-inner">

                <ul class="menu-nav">

                    <div v-for="dados in data.menu" :key="dados.id">
                        <nuxt-link :to="dados.url">
                            <li class="menu-nav-item"><span class="menu-nav-link"  >
                                        <div  :class="'/' + dados.url ==  currentUrl ? 'menu-link active-mobile' : 'menu-link inactive-mobile'" data-aos="zoom-out" data-aos-delay="1000">{{ dados.name }}</div>
                                    </span>
                            </li>
                        </nuxt-link>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import menu from '../../data/menu.json'
export default {
    data() {
        return {
            data: menu,
        }
    },  computed: {
    currentUrl() {
      return this.$route.fullPath;
    }
  }
}
</script>

<style scoped>
.gutter-box {
    text-align: center;
    width: max-content;
    font-family: 'Poppins';
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    min-width: 130px;
    max-width: 150px;
    margin-top: 12px;
    margin-inline-start: 10px;
    transition: 1s;
    font-size: 13px;


}
.active{
    border-bottom: 1px solid var(--terciary-color);
    color: var(--terciary-color);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}

.active:hover{
    border-bottom: 1px solid var(--primary-color) ;
    color: var(--primary-color) ;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.principal {
    z-index: 1;
    width: 100%;
    position: absolute;
}

.logo {
    width: 140px;
}
.inactive:hover {
    border-bottom: 1px solid var(--terciary-color) ;
    color: var(--terciary-color) ;
    font-size: 13.5px;
    transition: 1s;
    border-bottom: 1px solid ;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    
}

#burger-toggle {
    position: relative;
    appearance: none;
    opacity: 0;
    display: none;
}

#burger-toggle:checked~.menu {
    opacity: 1;
    visibility: visible;
}

#burger-toggle:checked~.menu .menu-nav-link span div,
#burger-toggle:checked~.menu img,
#burger-toggle:checked~.menu .title p {
    transform: translateY(0);
    transition: 1.2s 0.1s cubic-bezier(0.35, 0, 0.07, 1);
}



#burger-toggle:checked~.burger-menu .line::after {
    transform: translateX(0);
}

#burger-toggle:checked~.burger-menu .line:nth-child(1) {
    transform: translateY(calc(var(--burger-menu-radius) / 30)) rotate(45deg);
    background-color: #ffffff;
}

#burger-toggle:checked~.burger-menu .line:nth-child(2) {
    transform: scaleX(0);
    background-color: #ffffff;
}

#burger-toggle:checked~.burger-menu .line:nth-child(3) {
    transform: translateY(calc(var(--burger-menu-radius) / -5)) rotate(-45deg);
    background-color: #ffffff;
}

.burger-menu {
    --burger-menu-radius: 4em;
    position: absolute;
    top: 10px;
    right: 9%;
    z-index: 100;
    display: block;
    width: var(--burger-menu-radius);
    height: var(--burger-menu-radius);
    outline: none;
    cursor: pointer;
}

.burger-menu .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: var(--primary-color) ;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
}

.burger-menu .line:nth-child(1) {
    top: 32%;
}

.burger-menu .line:nth-child(2) {
    top: 42%;
}

.burger-menu .line:nth-child(3) {
    top: 53%;
}



.burger-menu .line:nth-child(2)::after {
    transition-delay: 0.1s;
}

.burger-menu .line:nth-child(3)::after {
    transition-delay: 0.2s;
}



.menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a1e23;
    opacity: 0;
    overflow-x: hidden;
    visibility: hidden;
    transition: 0.3s;
}

@media screen and (min-width: 750px) {
    .menu-mobile {
        display: none;
    }
    .menu-desktop{
        display: block;
    }
}

@media screen and (max-width: 767px) {
    .menu-mobile {
        display: relative;
        position: fixed;
    }
    .menu-desktop{
        display: none;
    }
}

.menu-nav {
    display: flex;
    line-height: 65px;
    font-size: 150%;
    text-transform: uppercase;
    margin-left: 100px;
    list-style-type: none;
    margin-top: 10%;
    flex-direction: column;
}



.menu-nav-item {
    padding: 0em 1em;
}

.menu-nav-link {
    color: white;
}

.menu-nav-link {
    overflow: hidden;
}
.active-mobile{
    text-decoration:underline ;
    text-decoration-color: var(--terciary-color);
}
.inactive-mobile{
    text-decoration: underline ;
    text-decoration-color: #010b0cde;
}

</style>

