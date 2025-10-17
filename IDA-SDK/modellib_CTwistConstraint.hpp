#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CTwistConstraint {
    char pad_308[0x20];
    CUtlString m_name;
    Vector m_vUpVector;
    char pad_307[0x4];
    char m_slaves[0x10];
    char m_targets[0x18];
    bool m_bInverse;
    char pad_374[0xf];
    Quaternion m_qParentBindRotation;
    Quaternion m_qChildBindRotation;
};
