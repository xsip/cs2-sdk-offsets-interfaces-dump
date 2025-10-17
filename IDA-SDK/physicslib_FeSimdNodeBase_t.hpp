#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_FourQuaternions.hpp"

class physicslib_FeSimdNodeBase_t {
    uint16_t nNode[4];
    uint16_t nNodeX0[4];
    uint16_t nNodeX1[4];
    uint16_t nNodeY0[4];
    uint16_t nNodeY1[4];
    uint16_t nDummy[4];
    mathlib_extended_FourQuaternions qAdjust;
};
