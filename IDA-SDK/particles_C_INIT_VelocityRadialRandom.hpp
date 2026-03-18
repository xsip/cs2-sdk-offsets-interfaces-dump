#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"

class particles_C_INIT_VelocityRadialRandom {
    void **__vftable_0;
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_690[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_691[0x2];
    bool m_bDisableOperator;
    char pad_692[0x1];
    CUtlString m_Notes;
    char end_pad_693[0x18];
    int32_t m_nAssociatedEmitterIndex;
    char end_pad_697[0x4];
    bool m_bPerParticleCenter;
    char pad_876[0x3];
    int32_t m_nControlPointNumber;
    particleslib_CPerParticleVecInput m_vecPosition;
    particleslib_CPerParticleVecInput m_vecFwd;
    particleslib_CPerParticleFloatInput m_fSpeedMin;
    particleslib_CPerParticleFloatInput m_fSpeedMax;
    Vector m_vecLocalCoordinateSystemSpeedScale;
    char pad_877[0x1];
    bool m_bIgnoreDelta;
    char end_pad_878[0x2];
};
