#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CMorphConstraint {
    char pad_308[0x20];
    CUtlString m_name;
    Vector m_vUpVector;
    char pad_307[0x4];
    char m_slaves[0x10];
    char m_targets[0x18];
    CUtlString m_sTargetMorph;
    int32_t m_nSlaveChannel;
    float32 m_flMin;
    float32 m_flMax;
    char end_pad_349[0xc];
};
