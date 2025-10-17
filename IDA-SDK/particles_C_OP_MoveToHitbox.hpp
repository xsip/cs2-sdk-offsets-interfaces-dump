#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleModelInput.hpp"
#include "particleslib_CParticleTransformInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"

class particles_C_OP_MoveToHitbox {
    char vTable1798[0x8];
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_1799[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_1800[0x2];
    bool m_bDisableOperator;
    char pad_1801[0x1];
    CUtlString m_Notes;
    char end_pad_1802[0x18];
    particleslib_CParticleModelInput m_modelInput;
    particleslib_CParticleTransformInput m_transformInput;
    char pad_2100[0x4];
    float32 m_flLifeTimeLerpStart;
    float32 m_flLifeTimeLerpEnd;
    float32 m_flPrevPosScale;
    char m_HitboxSetName[128];
    bool m_bUseBones;
    char pad_2101[0x3];
    particles_HitboxLerpType_t m_nLerpType;
    particleslib_CPerParticleFloatInput m_flInterpolation;
};
