#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particles_ParticleAttributeIndex_t.hpp"

class particles_C_OP_Diffusion {
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
    float32 m_flRadiusScale;
    particles_ParticleAttributeIndex_t m_nFieldOutput;
    int32_t m_nVoxelGridResolution;
    char end_pad_930[0x4];
};
