#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_VPhysXRange_t.hpp"

class modellib_VPhysXJoint_t {
    uint16_t m_nType;
    uint16_t m_nBody1;
    uint16_t m_nBody2;
    uint16_t m_nFlags;
    char pad_401[0x8];
    CTransform m_Frame1;
    CTransform m_Frame2;
    bool m_bEnableCollision;
    bool m_bIsLinearConstraintDisabled;
    bool m_bIsAngularConstraintDisabled;
    bool m_bEnableLinearLimit;
    modellib_VPhysXRange_t m_LinearLimit;
    bool m_bEnableLinearMotor;
    char pad_402[0x3];
    Vector m_vLinearTargetVelocity;
    float32 m_flMaxForce;
    bool m_bEnableSwingLimit;
    char pad_403[0x3];
    modellib_VPhysXRange_t m_SwingLimit;
    bool m_bEnableTwistLimit;
    char pad_404[0x3];
    modellib_VPhysXRange_t m_TwistLimit;
    bool m_bEnableAngularMotor;
    char pad_405[0x3];
    Vector m_vAngularTargetVelocity;
    float32 m_flMaxTorque;
    float32 m_flLinearFrequency;
    float32 m_flLinearDampingRatio;
    float32 m_flAngularFrequency;
    float32 m_flAngularDampingRatio;
    float32 m_flFriction;
    float32 m_flElasticity;
    float32 m_flElasticDamping;
    float32 m_flPlasticity;
    char pad_406[0x4];
    CUtlString m_Tag;
    char end_pad_407[0x8];
};
