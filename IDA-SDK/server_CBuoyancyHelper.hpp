#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CBuoyancyHelper {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlStringToken m_nFluidType;
    float32 m_flFluidDensity;
    float32 m_flNeutrallyBuoyantGravity;
    float32 m_flNeutrallyBuoyantLinearDamping;
    float32 m_flNeutrallyBuoyantAngularDamping;
    bool m_bNeutrallyBuoyant;
    char pad_3768[0x3];
    char m_vecFractionOfWheelSubmergedForWheelFriction[0x18];
    char m_vecWheelFrictionScales[0x18];
    char m_vecFractionOfWheelSubmergedForWheelDrag[0x18];
    char m_vecWheelDrag[0x18];
    char pad_3769[0x88];
};
