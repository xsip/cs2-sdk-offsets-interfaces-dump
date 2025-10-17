#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class inv_image_camera_t {
    QAngle angle;
    float32 fov;
    float32 znear;
    float32 zfar;
    Vector target;
    Vector target_nudge;
    float32 orbit_distance;
};
