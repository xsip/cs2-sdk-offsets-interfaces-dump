#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSimdAnimStrayRadius_t {
    uint16_t nNode[4];
    char pad_2442[0x10];
    fltx4 flMaxDist;
    fltx4 flRelaxationFactor;
};
