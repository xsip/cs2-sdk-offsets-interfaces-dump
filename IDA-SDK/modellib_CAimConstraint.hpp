#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CAimConstraint {
    char pad_308[0x20];
    CUtlString m_name;
    Vector m_vUpVector;
    char pad_307[0x4];
    char m_slaves[0x10];
    char m_targets[0x18];
    Quaternion m_qAimOffset;
    uint32_t m_nUpType;
    char end_pad_306[0xc];
};
