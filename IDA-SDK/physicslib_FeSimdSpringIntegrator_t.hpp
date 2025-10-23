#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSimdSpringIntegrator_t {
    uint16_t nNode[4];
    char pad_2445[0x10];
    fltx4 flSpringRestLength;
    fltx4 flSpringConstant;
    fltx4 flSpringDamping;
    fltx4 flNodeWeight0;
};
