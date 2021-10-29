// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
jQuery('.menu-lista-link.menu-lista-contato').on('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});
jQuery('.menu-lista-link.menu-lista-download').on('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});
jQuery('.card.card-montadoras:eq(0)').on('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Lorem'
    });
});
jQuery('.card.card-montadoras:eq(1)').on('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Ipsum'
    });
});
jQuery('.card.card-montadoras:eq(2)').on('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Dolor'
    });
});
jQuery('input[id=nome]').on('change', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'nome',
        eventLabel: 'preencheu'
    });
});
jQuery('input[id=email]').on('change', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'email',
        eventLabel: 'preencheu'
    });
});
jQuery('input[id=telefone]').on('change', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'telefone',
        eventLabel: 'preencheu'
    });
});
jQuery('input[id=aceito]').on('change', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'aceito',
        eventLabel: 'preencheu'
    });
});
jQuery('.contato').on('submit', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
});