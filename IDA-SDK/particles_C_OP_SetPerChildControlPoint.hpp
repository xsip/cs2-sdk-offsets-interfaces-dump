#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particles_ParticleAttributeIndex_t.hpp"

class particles_C_OP_SetPerChildControlPoint {
    void **__vftable_0;
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_691[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_692[0x2];
    bool m_bDisableOperator;
    char pad_693[0x1];
    CUtlString m_Notes;
    char end_pad_694[0x18];
    int32_t m_nChildGroupID;
    int32_t m_nFirstControlPoint;
    int32_t m_nNumControlPoints;
    char pad_1217[0x4];
    particleslib_CParticleCollectionFloatInput m_nParticleIncrement;
    particleslib_CParticleCollectionFloatInput m_nFirstSourcePoint;
    bool m_bSetOrientation;
    char pad_1218[0x3];
    particles_ParticleAttributeIndex_t m_nOrientationField;
    bool m_bNumBasedOnParticleCount;
    char end_pad_1219[0x7];
};
