<?php
/*
Plugin Name: Portable News Search
Description: Add News Search anywhere on your website using the shortcode [portable-newssearch].
Version: 1.0
Author: Pete Macumber
*/

function portable_newssearch_enqueue_assets() {
    wp_enqueue_style('portable_newssearch_css', plugins_url('portable-newssearch.css', __FILE__));
    wp_enqueue_script('portable_newssearch_js', plugins_url('portable-newssearch.js', __FILE__));
}

add_action('wp_enqueue_scripts', 'portable_newssearch_enqueue_assets');

// Display the search bar and results area
function portable_newssearch_frontend() {
    ob_start();
    ?>
    <div class="portable_newssearch-bar">
        <input type="text" id="portable_newssearch-input" placeholder="Search for news...">
    </div>
    <div class="portable_newssearch-results"></div>
    <?php
    return ob_get_clean();
}
add_shortcode('portable-newssearch', 'portable_newssearch_frontend');
?>
