#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSpringIntegrator_t {
    uint16_t nNode[2];
    float32 flSpringRestLength;
    float32 flSpringConstant;
    float32 flSpringDamping;
    float32 flNodeWeight0;
};
