#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"

class particles_C_INIT_InitialRepulsionVelocity {
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
    int32_t m_nAssociatedEmitterIndex;
    char end_pad_1805[0x4];
    char m_CollisionGroupName[128];
    particles_ParticleTraceSet_t m_nTraceSet;
    Vector m_vecOutputMin;
    Vector m_vecOutputMax;
    int32_t m_nControlPointNumber;
    bool m_bPerParticle;
    bool m_bTranslate;
    bool m_bProportional;
    char pad_1909[0x1];
    float32 m_flTraceLength;
    bool m_bPerParticleTR;
    bool m_bInherit;
    char pad_1910[0x2];
    int32_t m_nChildCP;
    int32_t m_nChildGroupID;
    char end_pad_1911[0x4];
};
