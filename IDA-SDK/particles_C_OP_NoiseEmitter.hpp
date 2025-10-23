#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"

class particles_C_OP_NoiseEmitter {
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
    int32_t m_nEmitterIndex;
    char end_pad_1812[0x4];
    float32 m_flEmissionDuration;
    float32 m_flStartTime;
    float32 m_flEmissionScale;
    int32_t m_nScaleControlPoint;
    int32_t m_nScaleControlPointField;
    int32_t m_nWorldNoisePoint;
    bool m_bAbsVal;
    bool m_bAbsValInv;
    char pad_2114[0x2];
    float32 m_flOffset;
    float32 m_flOutputMin;
    float32 m_flOutputMax;
    float32 m_flNoiseScale;
    float32 m_flWorldNoiseScale;
    Vector m_vecOffsetLoc;
    float32 m_flWorldTimeScale;
};
