#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeRodConstraint_t {
    uint16_t nNode[2];
    float32 flMaxDist;
    float32 flMinDist;
    float32 flWeight0;
    float32 flRelaxationFactor;
};
