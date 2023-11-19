<template >
    <div class="principal">
        <ButtonsFixed />

        <a-row type="flex" justify="center" align="middle" class="body">
            <a-col class="gutter-row" :span="5">
                <div>
                    <nuxt-link to='/'>
                        <img class="logo-footer"
                            src="https://raw.githubusercontent.com/Leonardu76/images/main/baber/Ilustra%C3%A7%C3%A3o_de_barbearia_vintage___Vetor_Gr%C3%A1tis-removebg-preview.png"
                            alt="">
                    </nuxt-link>
                </div>
            </a-col>

            <a-col class="gutter-row adress-footer-div" :span="10">
                <div class="adress-footer">
                    <div class="adress-footer-item">
                        <PhoneOutlined /> +55000000000
                    </div>
                    <div class="adress-footer-item">
                        <MailOutlined /> company@yahoo.com.br
                    </div>
                    <div class="adress-footer-item">
                        <CompassOutlined /> Granjas Primavera - 73 -
                        <strong>Granjas
                            339360-00 - Ribeirão das Neves - MG </strong>
                    </div>
                </div>
            </a-col>
            <a-col class="gutter-row">
                <div class="redes-sociais">
                    <h5>Siga-nos</h5>
                    <nuxt-link to='https://www.instagram.com/' target="_blank">
                        <InstagramOutlined />
                    </nuxt-link>
                    <nuxt-link to='https://www.facebook.com/' target="_blank">
                        <FacebookOutlined />
                    </nuxt-link>
                    <nuxt-link to='https://www.youtube.com/' target="_blank">
                        <YoutubeOutlined />
                    </nuxt-link>
                    <nuxt-link to='https://twitter.com/login?lang=pt' target="_blank">
                        <TwitterOutlined />
                    </nuxt-link>
                </div>
            </a-col>
        </a-row>
        <div class="footer-footer">
            <p>Copyright © {{ anoAtual }}</p>
            Desenvolvido com
            <CoffeeOutlined /> por
            <nuxt-link to='https://leonardosouza.netlify.app/' target="_blank" class="link-by">
                Leonardo Souza
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import ButtonsFixed from "../buttons/buttonFixed/ButtonsFixed.vue"
import {
    InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined, PhoneOutlined, MailOutlined, CompassOutlined, CoffeeOutlined
} from '@ant-design/icons-vue';
export default {
    data() {
        return {
            anoAtual: new Date().getFullYear()

        }
    }, components: {
        ButtonsFixed,
        InstagramOutlined,
        FacebookOutlined,
        YoutubeOutlined,
        TwitterOutlined,
        PhoneOutlined,
        MailOutlined,
        CompassOutlined,
        CoffeeOutlined
    }
}

</script>
<style scoped>
.principal {
    background-color: var(--secondary-color);
    margin-top: 20px;

}

.redes-sociais {
    font-size: 20px;
    font-family: Poppins;

    text-align: center;
}

.adress-footer-item .anticon {
    margin-right: 15px !important;
}

.redes-sociais .anticon {
    margin-right: 4px !important;
    text-align: center;
    color: white;
    transition: 1s;

}

.redes-sociais .anticon:hover {
    color: var(--terciary-color);
    font-size: 25px;
    transition: 1s;
}

h5 {
    text-transform: uppercase;
    margin-top: unset;
    margin-bottom: 2px;
    font-family: Poppins;
    color: white;



}

.adress-footer {
    color: white;
    font-size: 15px;
    text-align: start;
    font-family: Poppins;

}

.adress-footer-item {
    line-height: 40px;
}

.footer-footer {
    border-top: 1px solid var(--primary-color);
    background-color: var(--terciary-color);
    text-align: center;
    font-family: Poppins;
    font-size: 15px;

}

.link-by {
    font-weight: bolder;
    color: var(--secondary-color);
}

.logo-footer {
    width: 140px;
}
@media screen and (max-width: 635px) {
    .body {
        display: inline-grid;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    }
    .adress-footer-div{
        max-width: -webkit-fill-available;
    margin: 20px;
    }}
</style>
