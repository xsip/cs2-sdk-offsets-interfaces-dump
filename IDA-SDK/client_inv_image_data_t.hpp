#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_inv_image_map_t.hpp"
#include "client_inv_image_item_t.hpp"
#include "client_inv_image_camera_t.hpp"
#include "client_inv_image_light_sun_t.hpp"
#include "client_inv_image_light_fill_t.hpp"
#include "client_inv_image_light_barn_t.hpp"
#include "client_inv_image_light_barn_t.hpp"

class client_inv_image_data_t {
    client_inv_image_map_t map;
    client_inv_image_item_t item;
    client_inv_image_camera_t camera;
    client_inv_image_light_sun_t lightsun;
    client_inv_image_light_fill_t lightfill;
    client_inv_image_light_barn_t light0;
    client_inv_image_light_barn_t light1;
    char end_pad_1666[0x4];
};
