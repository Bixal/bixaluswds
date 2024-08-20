<?php

/**
 * @file
 * Preprocess function for blocks.
 */

/**
 * Implements hook_preprocess_block().
 */
function bixaluswds_preprocess_block(&$variables) {
  $variables['content']['#attributes']['block'] = $variables['attributes']['id'];
}
