#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class vphysics2_constraint_breakableparams_t {
    float32 strength;
    float32 forceLimit;
    float32 torqueLimit;
    float32 bodyMassScale[2];
    bool isActive;
    char end_pad_4183[0x3];
};
