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
    float32 m_flLinearDragScale;
    float32 m_flAngularDragScale;
    float32 m_flLinearFluidDragScale;
    float32 m_flAngularFluidDragScale;
    Vector m_vLastAwakeForceAccum;
    Vector m_vLastAwakeTorqueAccum;
    float32 m_flBuoyancyScale;
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
    char pad_1349[0x1];
    Vector m_vGravity;
    bool m_bSpeculativeEnabled;
    bool m_bHasShadowController;
    physicslib_DynamicContinuousContactBehavior_t m_nDynamicContinuousContactBehavior;
    char end_pad_1350[0x5];
    uint64_t m_nOldPointer;
};
