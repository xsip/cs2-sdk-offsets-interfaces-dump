#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimBone {
    CBufferString m_name;
    int32_t m_parent;
    Vector m_pos;
    QuaternionStorage m_quat;
    float32 m_scale;
    QuaternionStorage m_qAlignment;
    int32_t m_flags;
};
