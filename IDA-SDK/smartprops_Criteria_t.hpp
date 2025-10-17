#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_Criteria_t {
    float32 m_flLength;
    bool m_bAllowScale;
    char pad_2570[0x3];
    float32 m_flMinLength;
    float32 m_flMaxLength;
};
