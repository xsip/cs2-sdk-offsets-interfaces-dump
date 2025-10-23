#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_CParticleTransformInput {
    char pad_1711[0x10];
    particleslib_ParticleTransformType_t m_nType;
    char pad_1858[0x4];
    CParticleNamedValueRef m_NamedValue;
    bool m_bFollowNamedValue;
    bool m_bSupportsDisabled;
    bool m_bUseOrientation;
    char pad_1859[0x1];
    int32_t m_nControlPoint;
    int32_t m_nControlPointRangeMax;
    float32 m_flEndCPGrowthTime;
};
