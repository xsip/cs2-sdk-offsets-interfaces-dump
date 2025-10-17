#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CMotorController {
    char vTable3856[0x8];
    float32 m_speed;
    float32 m_maxTorque;
    VectorWS m_axis;
    float32 m_inertiaFactor;
};
