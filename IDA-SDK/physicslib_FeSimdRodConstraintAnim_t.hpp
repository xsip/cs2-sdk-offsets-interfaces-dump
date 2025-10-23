#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSimdRodConstraintAnim_t {
    uint16_t nNode[4];
    char pad_2443[0x10];
    fltx4 f4Weight0;
    fltx4 f4RelaxationFactor;
};
