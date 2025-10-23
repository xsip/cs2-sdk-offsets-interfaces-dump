#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CBuoyancyHelper {
    char vTable946[0x18];
    CUtlStringToken m_nFluidType;
    float32 m_flFluidDensity;
    float32 m_flNeutrallyBuoyantGravity;
    float32 m_flNeutrallyBuoyantLinearDamping;
    float32 m_flNeutrallyBuoyantAngularDamping;
    bool m_bNeutrallyBuoyant;
    char pad_947[0x3];
    char m_vecFractionOfWheelSubmergedForWheelFriction[0x18];
    char m_vecWheelFrictionScales[0x18];
    char m_vecFractionOfWheelSubmergedForWheelDrag[0x18];
    char m_vecWheelDrag[0x18];
    char pad_948[0x88];
};
