#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_C_IronSightController {
    void **__vftable_0;
    void **__vftable_1;
    bool m_bIronSightAvailable;
    char pad_2254[0x3];
    float32 m_flIronSightAmount;
    float32 m_flIronSightAmountGained;
    float32 m_flIronSightAmountBiased;
    float32 m_flIronSightAmount_Interpolated;
    float32 m_flIronSightAmountGained_Interpolated;
    float32 m_flIronSightAmountBiased_Interpolated;
    float32 m_flInterpolationLastUpdated;
    QAngle m_angDeltaAverage[8];
    QAngle m_angViewLast;
    Vector2D m_vecDotCoords;
    float32 m_flFiringInaccuracyExtraWidthMultiplier;
    float32 m_flSpeedRatio;
    char end_pad_2255[0x4];
};
