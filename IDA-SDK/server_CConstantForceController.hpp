#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CConstantForceController {
    char vTable3839[0xc];
    Vector m_linear;
    RotationVector m_angular;
    Vector m_linearSave;
    RotationVector m_angularSave;
    char pad_3840[0x4];
};
