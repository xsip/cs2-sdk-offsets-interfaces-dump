#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class vphysics2_vphysics_save_cphysicsbody_t {
    CUtlString m_sDebugName;
    Vector m_vPosition;
    QuaternionStorage m_qOrientation;
    Vector m_vLinearVelocity;
    Vector m_vAngularVelocity;
    Vector m_vLocalMassCenter;
    Vector m_LocalInertiaInv[3];
    float32 m_flMassInv;
    float32 m_flGameMass;
    float32 m_flMassScaleInv;
    float32 m_flInertiaScaleInv;
    float32 m_flLinearDamping;
    float32 m_flAngularDamping;
    float32 m_flLinearDrag;
    float32 m_flAngularDrag;
    float32 m_flLinearBuoyancyDrag;
    float32 m_flAngularBuoyancyDrag;
    Vector m_vLastAwakeForceAccum;
    Vector m_vLastAwakeTorqueAccum;
    float32 m_flBuoyancyFactor;
    float32 m_flGravityScale;
    float32 m_flTimeScale;
    int32_t m_nBodyType;
    uint32_t m_nGameIndex;
    uint32_t m_nGameFlags;
    int8_t m_nMinVelocityIterations;
    int8_t m_nMinPositionIterations;
    int8_t m_nMassPriority;
    bool m_bEnabled;
    bool m_bSleeping;
    bool m_bIsContinuousEnabled;
    bool m_bDragEnabled;
    bool m_bBuoyancyDragEnabled;
    Vector m_vGravity;
    bool m_bSpeculativeEnabled;
    bool m_bHasShadowController;
    physicslib_DynamicContinuousContactBehavior_t m_nDynamicContinuousContactBehavior;
    char end_pad_2451[0x5];
    uint64_t m_nOldPointer;
};
