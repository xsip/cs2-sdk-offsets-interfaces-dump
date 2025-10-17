#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "inv_image_map_t.hpp"
#include "inv_image_item_t.hpp"
#include "inv_image_camera_t.hpp"
#include "inv_image_light_sun_t.hpp"
#include "inv_image_light_fill_t.hpp"
#include "inv_image_light_barn_t.hpp"
#include "inv_image_light_barn_t.hpp"

class inv_image_data_t {
    inv_image_map_t map;
    inv_image_item_t item;
    inv_image_camera_t camera;
    inv_image_light_sun_t lightsun;
    inv_image_light_fill_t lightfill;
    inv_image_light_barn_t light0;
    inv_image_light_barn_t light1;
    char end_pad_1104[0x4];
};
