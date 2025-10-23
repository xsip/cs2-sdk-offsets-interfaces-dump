#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_QuantizationRange_t.hpp"

class animlib_NmFloatCurveCompressionSettings_t {
    animlib_QuantizationRange_t m_range;
    bool m_bIsStatic;
    char end_pad_1777[0x3];
};
