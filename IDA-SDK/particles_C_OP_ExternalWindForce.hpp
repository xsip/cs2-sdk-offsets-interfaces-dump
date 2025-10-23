#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"

class particles_C_OP_ExternalWindForce {
    char vTable1797[0x8];
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_1798[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_1799[0x2];
    bool m_bDisableOperator;
    char pad_1800[0x1];
    CUtlString m_Notes;
    char end_pad_1801[0x18];
    char pad_1813[0x10];
    particleslib_CPerParticleVecInput m_vecSamplePosition;
    particleslib_CPerParticleVecInput m_vecScale;
    bool m_bSampleWind;
    bool m_bSampleWater;
    bool m_bDampenNearWaterPlane;
    bool m_bSampleGravity;
    char pad_2057[0x4];
    particleslib_CPerParticleVecInput m_vecGravityForce;
    bool m_bUseBasicMovementGravity;
    char pad_2058[0x7];
    particleslib_CPerParticleFloatInput m_flLocalGravityScale;
    particleslib_CPerParticleFloatInput m_flLocalBuoyancyScale;
    particleslib_CPerParticleVecInput m_vecBuoyancyForce;
};
