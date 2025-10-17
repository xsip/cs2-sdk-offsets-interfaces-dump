#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_QuantizationRange_t.hpp"
#include "animlib_QuantizationRange_t.hpp"
#include "animlib_QuantizationRange_t.hpp"
#include "animlib_QuantizationRange_t.hpp"

class animlib_NmCompressionSettings_t {
    animlib_QuantizationRange_t m_translationRangeX;
    animlib_QuantizationRange_t m_translationRangeY;
    animlib_QuantizationRange_t m_translationRangeZ;
    animlib_QuantizationRange_t m_scaleRange;
    Quaternion m_constantRotation;
    bool m_bIsRotationStatic;
    bool m_bIsTranslationStatic;
    bool m_bIsScaleStatic;
    char end_pad_1777[0xd];
};
