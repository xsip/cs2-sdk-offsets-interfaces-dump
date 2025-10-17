#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class vphysics2_constraint_axislimit_t {
    float32 flMinRotation;
    float32 flMaxRotation;
    float32 flMotorTargetAngSpeed;
    float32 flMotorMaxTorque;
};
