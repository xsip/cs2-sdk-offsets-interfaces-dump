#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_FourVectors2D.hpp"

class physicslib_FeSimdTri_t {
    uint32_t nNode[4];
    char pad_2447[0x30];
    fltx4 w1;
    fltx4 w2;
    fltx4 v1x;
    physicslib_FourVectors2D v2;
};
