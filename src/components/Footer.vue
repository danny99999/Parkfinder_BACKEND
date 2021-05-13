<template>
      <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <center>
          <div class="col-sm-12 col-md-6">
            <br>
            <br>
            <br>
            <h6>O nama</h6>
            <p class="text-justify">Ovom aplikacijom želimo olakšati korisnicima pronalazak dostupnih parkirnih mjesta i njihove lokacije,  prikaz parkirnih zona uz termin naplaćivanja određene parking zone.
Ova aplikacija će slati korisnicima obavijesti i prikazivati informacije o radnom vremenu i dostupnosti parkirnih zona/mjesta.
Za razliku od klasičnih parking sustava koji služe samo za kupovinu karata, naš sustav ima mogućnost pronalaska, prikazivanja dostupnosti i lokaciju parking mjesta.
Također, naša aplikacija ima mogućnost izračuna ukupnog vremena boravka na parkingu bez potrebe unošenja registracijske tablice korisnika. 
Naša aplikacija bi bila komplementarna tradicionalnim sustavima za plaćanje parkinga. 
</p>
          </div>
          </center>
        </div>
        <hr>
      </div>
      <div class="container">
            <center> <p>Copyright &copy; Park Finder 2021. Sva prava pridržana. </p> </center>
        </div>
</footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>


.site-footer
{
  background-color:#26272b;
  padding:30px 0 10px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  height: 550px;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d;
}
.copyright-text
{
  margin:0;
}
@media (max-width: 1500px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width: 1200px)
{
  .site-footer
  {
    padding-bottom:0;
   
    
  }
  .site-footer .copyright-text,.site-footer
  {
    text-align:center;
  }
}
.col-md-3
{
  flex: 1;
  max-width: 100%;
}
</style>