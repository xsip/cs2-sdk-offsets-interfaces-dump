#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_C_IronSightController {
    char vTable1453[0x10];
    bool m_bIronSightAvailable;
    char pad_1454[0x3];
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
    char end_pad_1455[0x4];
};
