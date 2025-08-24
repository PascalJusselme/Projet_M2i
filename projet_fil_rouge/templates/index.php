<section class="hero_section">
  <div class="hero_container">
    <div class="title_site">
      <h1>
        Les &Eacute;claireurs <span class="color_word">Solidaires</span>
      </h1>
    </div>
    <div class="tagline_site">
      <p>
        Passez à l'action citoyenne : trouvez facilement des missions de
        bénévolat variées, engagez-vous pour l'environnement, la solidarité,
        l'entraide ou l'éducation, et devenez un acteur du changement social
        !
      </p>
    </div>
    <div class="block_connection_btn connection_btn">
      <a class="signUp_btn connection_btn" href="index.php?page=register">S'inscrire</a>
      <a class="logIn_btn connection_btn" href="index.php?page=login">Se Connecter</a>
    </div>
    <div class="block_search">
      <input type="search" name="search_bar_hero" class="search_input" placeholder="Rechercher une mission" />
      <button id="search_validate_btn">
        <img src="./img/search.svg" alt="" />
      </button>
    </div>
  </div>
</section>

<section class="about">
  <div class="about_left">
    <div class="txt_about_left">
      <h3>Qui Sommes Nous ?</h3>
      <p>
        "Les Éclaireurs Solidaires" est une association loi 1901, fondée à
        Lyon en 2020, dédiée à la promotion et à la facilitation de
        l'engagement bénévole.
      </p>
      <p>
        Notre mission principale est de créer des ponts entre les citoyens
        désireux d'agir et les besoins concrets du terrain, en proposant des
        opportunités de bénévolat ponctuelles ou régulières dans les
        domaines social, écologique et culturel.
      </p>
      <div class="btn_learn_more">
        <button id="btn_learn_more">En savoir plus</button>
      </div>
    </div>
    <div class="img_about_left">
      <img src="./img/img-asso3.jpg" />
    </div>
  </div>
  <div class="about_right">
    <div class="img_about_right">
      <img src="./img/img-asso4.jpg" />
    </div>
    <div class="txt_about_right">
      <h3>Nos chiffres :</h3>
      <ul>
        <li>1 200 bénévoles actifs depuis notre création</li>
        <li>+350 missions réalisées chaque mois</li>
        <li>85 % de satisfaction parmi nos bénévoles</li>
        <li>+ 40 partenaires associatifs à Lyon et sa métropole</li>
        <li>3 domaines d’actions : social, écologique, cullturel</li>
      </ul>
      <div class="btn_learn_more">
        <button id="btn_learn_more">En savoir plus</button>
      </div>
    </div>
  </div>
</section>

<section class="missions">
  <div class="missions_container">
    <div class="section_title">
      <h3>NOS DERNI&Egrave;RES MISSIONS</h3>
    </div>

    <div class="card_missions_container">
      <?php
      $count = count($missions);
      for ($i = 0; $i < $count; $i++) {
        $mission = $missions[$i];
        $numMission = 'miss0' . $i + 1;
        if ($i == $count - 1) {
          echo ('<div class="card_mission ' . $numMission . ' last">');
        } else {
          echo ('<div class="card_mission ' . $numMission . '">');
        }
        ;
        ?>
        <div class="card_header">
          <h3><?= htmlspecialchars($mission['mission_title']) ?></h3>
          <span class="cat_mission"><?= htmlspecialchars($mission['mission_category']) ?></span>
        </div>
        <div class="description">
          <p>
            <?php echo (nl2br($mission['mission_description'])); ?>
          </p>
        </div>
        <div class="btn_group">
          <span id="btn_view_more_down">Voir plus</span>
          <span id="btn_view_more_up" class="visible">Voir moins</span>
        </div>
        <div class="card_info">
          <p><strong>Contact : </strong><?= htmlspecialchars($mission['mission_contact']) ?></p>
          <p><strong>Date : </strong><?= htmlspecialchars($mission['mission_date']) ?></p>
          <p><strong>Lieu : </strong><?= htmlspecialchars($mission['mission_lieu']) ?></p>
          <p><strong>Durée : </strong><?= htmlspecialchars($mission['mission_duree']) ?></p>
        </div>
      </div>
      <?php
      }
      ?>
  </div>
  <div class="view_more_mission">
    <button>Voir plus de missions ...</button>
  </div>
  </div>
</section>

<section class="contact">
  <div class="contact_container">
    <div class="form_header">
      <div class="section_title">
        <h3>Une question, un besoin ? CONTACTEZ-NOUS</h3>
      </div>
      <div class="tagline_contact">
        <p>
          Vous représentez une association, un collectif ou vous cherchez à
          vous engager comme bénévole ?
        </p>
        <p>Envoyez-nous un message, on vous aide à passer à l'action !</p>
      </div>
    </div>
    <form class="form_contact" action="#">
      <input id="name_contact" type="text" placeholder="Nom*" aria-describedby="name_help" required />
      <div id="name_help"></div>
      <input id="mail_contact" type="email" placeholder="Email*" aria-describedby="mail_help" required />
      <div id="mail_help"></div>
      <textarea id="text_area_contact" rows="4" placeholder="Votre message..." aria-describedby="text_area_help"
        required></textarea>
      <div id="text_area_help"></div>
    </form>
    <div class="form_footer">
      <div class="consent">
        <label class="custom_checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <p>
          Je consens à ce que mes informations soient stockées en vue de me
          répondre
        </p>
      </div>
      <button id="button_formu">ENVOYER</button>
    </div>
  </div>
</section>

<section class="testimonials">
  <div class="testimonials_container">
    <div class="section_title">
      <h3>T&Eacute;MOIGNAGES</h3>
    </div>

    <div class="block_testimonials">
      <div class="card_testimonials">
        <div class="card_testimonials_container">
          <div class="entete_avis">
            <div class="avatar_member">
              <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="" id="img_avatar" />
            </div>
            <div class="lib_mission_avis">
              <p>Sportif et solidaire</p>
            </div>
          </div>
          <div class="foot_avis">
            <div class="icon_hearth">
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
            </div>
            <div class="txt_avis">
              <p>Cammille D.</p>
              <p>
                Super événement ! J'étais au ravitaillement et l'ambiance
                était électrique. Maxime avait bien organisé les rotations.
                Lever tôt mais ça vaut le coup de voir tous ces coureurs se
                dépasser pour la bonne cause. Équipe de bénévoles au top !
              </p>
              <p><b>Date : </b>30 juillet 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card_testimonials">
        <div class="card_testimonials_container">
          <div class="entete_avis">
            <div class="avatar_member">
              <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="" id="img_avatar" />
            </div>
            <div class="lib_mission_avis">
              <p>Accompagnement Festival de rue</p>
            </div>
          </div>
          <div class="foot_avis">
            <div class="icon_hearth">
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
            </div>
            <div class="txt_avis">
              <p>Antoine K.</p>
              <p>
                Festival génial ! J'étais à la technique et c'était intense.
                Quelques moments de stress car pas mal d'imprévus, mais
                l'équipe était solidaire. Julie nous a bien soutenus. C'est
                le genre de mission où on apprend beaucoup !
              </p>
              <p><b>Date : </b>13 août 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card_testimonials last">
        <div class="card_testimonials_container">
          <div class="entete_avis">
            <div class="avatar_member">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="" id="img_avatar" />
            </div>
            <div class="lib_mission_avis">
              <p>Magie avec les enfants</p>
            </div>
          </div>
          <div class="foot_avis">
            <div class="icon_hearth">
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
              <img src="./img/coeur-valide.png" alt="" id="icon_hearth" />
            </div>
            <div class="txt_avis">
              <p>Laura B.</p>
              <p>
                Quel bonheur de voir les yeux des enfants briller ! Sophie,
                la bibliothécaire, nous avait bien conseillés sur les
                livres. L'espace était parfait et les enfants très
                attentifs. J'ai pris autant de plaisir qu'eux. Mission
                parfaite pour moi !
              </p>
              <p><b>Date : </b>26 juin 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>