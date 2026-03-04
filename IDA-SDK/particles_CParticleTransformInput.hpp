#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_CParticleTransformInput {
    char pad_607[0x10];
    particleslib_ParticleTransformType_t m_nType;
    char pad_751[0x4];
    CParticleNamedValueRef m_NamedValue;
    bool m_bFollowNamedValue;
    bool m_bSupportsDisabled;
    bool m_bUseOrientation;
    char pad_752[0x1];
    int32_t m_nControlPoint;
    int32_t m_nControlPointRangeMax;
    float32 m_flEndCPGrowthTime;
};
