#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSimdRodConstraint_t {
    uint16_t nNode[4];
    char pad_2444[0x10];
    fltx4 f4MaxDist;
    fltx4 f4MinDist;
    fltx4 f4Weight0;
    fltx4 f4RelaxationFactor;
};
