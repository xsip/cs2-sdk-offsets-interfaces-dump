#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"
#include "particles_CRandomNumberGeneratorParameters.hpp"

class particles_C_INIT_VelocityRandom {
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
    int32_t m_nControlPointNumber;
    char pad_879[0x4];
    particleslib_CPerParticleFloatInput m_fSpeedMin;
    particleslib_CPerParticleFloatInput m_fSpeedMax;
    particleslib_CPerParticleVecInput m_LocalCoordinateSystemSpeedMin;
    particleslib_CPerParticleVecInput m_LocalCoordinateSystemSpeedMax;
    bool m_bIgnoreDT;
    char pad_880[0x3];
    particles_CRandomNumberGeneratorParameters m_randomnessParameters;
    char end_pad_881[0x4];
};
